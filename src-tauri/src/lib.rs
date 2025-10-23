use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }

            let main_webview = app.get_webview_window("main").unwrap();
            let _ = main_webview.with_webview(|webview| {
                #[cfg(target_os = "macos")]
                unsafe {
                    let view: &objc2_web_kit::WKWebView = &*webview.inner().cast();
                    view.setAllowsBackForwardNavigationGestures(true);
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
