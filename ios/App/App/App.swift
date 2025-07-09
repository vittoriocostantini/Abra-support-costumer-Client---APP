import SwiftUI
import Capacitor

@main
struct App: SwiftUI.App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
} 