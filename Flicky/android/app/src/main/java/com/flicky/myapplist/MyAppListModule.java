package com.flicky.myapplist;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;

import android.media.MediaPlayer;
import android.media.AudioManager;
import android.util.Log;

public class MyAppListModule extends ReactContextBaseJavaModule {

  private static MediaPlayer mediaPlayer = null;

  public MyAppListModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

   @Override
   public String getName() {
     return "MyAppList";
   }


    @ReactMethod
    public String play() {
      return "Hey!";
    }
}
