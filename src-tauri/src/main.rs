// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod error;

#[tauri::command]
async fn suggest(context: &str) -> Result<Vec<String>, String> {
    commands::suggest::run(context).map_err(|e| e.to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![suggest])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
