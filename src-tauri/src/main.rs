// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
async fn suggest(_context: &str) -> Result<Vec<String>, String> {
    Ok(
        vec![
            "suggestion 1".to_owned(),
            "suggestion 2".to_owned(),
            "suggestion 3".to_owned()
        ]
    )
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![suggest])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
