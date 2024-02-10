#[tauri::command]
pub async fn suggest(_context: &str) -> Result<Vec<String>, String> {
    Ok(vec![
        "suggestion 1".to_owned(),
        "suggestion 2".to_owned(),
        "suggestion 3".to_owned(),
    ])
}
