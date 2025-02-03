use tauri::{Manager, WindowEvent}; // Import Manager trait

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      let window = app.get_webview_window("main").unwrap(); // Now works!

      // Intercept the close request event
      window.on_window_event(|event| {
        if let WindowEvent::CloseRequested { api, .. } = event {
          api.prevent_close();
          println!("Close prevented!");
        }
      });

      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
