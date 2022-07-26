package so.onekey.app.wallet

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import so.onekey.app.wallet.reactModule.OKLiteManager
import so.onekey.app.wallet.reactModule.PermissionManager
import so.onekey.app.wallet.viewManager.homePage.HomePageManager


class MainReactNativePackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        val modules = mutableListOf<NativeModule>()
        modules.add(OKLiteManager(reactContext))
        modules.add(PermissionManager(reactContext))
        return modules
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        val managers = mutableListOf<ViewManager<*, *>>()
        managers.add(HomePageManager())
        return managers
    }
}
