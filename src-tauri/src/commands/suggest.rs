use std::env;

use openai_api_rs::v1::api::Client;
use openai_api_rs::v1::chat_completion::{
    ChatCompletionMessage, ChatCompletionRequest, Content, MessageRole,
};
use openai_api_rs::v1::common::GPT3_5_TURBO_1106;

use crate::error::Error;

pub(crate) fn run(context: &str) -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let api_key = env::var("OPENAI_API_KEY")
        .expect("`OPENAI_API_KEY` must be set.")
        .to_owned();
    let client = Client::new(api_key);
    let request = ChatCompletionRequest::new(
        GPT3_5_TURBO_1106.to_owned(),
        vec![
            ChatCompletionMessage {
                role: MessageRole::system,
                content: Content::Text("User inputs some brainstorming text.
Your job is suggest three choices (very short and succinct) to go. Write each suggestion in single line. **DO NOT NARRATE**".to_owned()),
                name: None,
            },
            ChatCompletionMessage {
                role: MessageRole::assistant,
                content: Content::Text(context.to_owned()),
                name: None,
            }
        ]
    );
    let result = client.chat_completion(request)?;

    let ai_response = result.choices[0].message.content.clone();

    ai_response
        .map(|text| text.split('\n').map(|s| s.to_owned()).collect())
        .ok_or(Box::new(Error::Fatal(
            "No content in the OpenAI response".to_owned(),
        )))
}
