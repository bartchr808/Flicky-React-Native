package com.flicky;

import com.facebook.react.ReactActivity;
import com.sensormanager.SensorManagerPackage;



import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;

//import android.media.MediaPlayer;
//import android.media.AudioManager;
import android.util.Log;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.widget.TextView;

import android.content.Intent;



public class MainActivity extends ReactActivity implements SensorEventListener {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
  @Override
  protected String getMainComponentName() {
      return "Flicky";
  }
  private TextView xText, yText, zText;
  private Sensor mySensor;
  private SensorManager SM;

  @ReactMethod
    public void isEqual(
      int a,
      int b,
      Callback booleanCallback) {
        boolean equal= a == b;
        booleanCallback.invoke(equal);
      }


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //setContentView(R.layout.activity_main);

    // Create our Sensor Manager
    SM = (SensorManager)getSystemService(SENSOR_SERVICE);

    // Accelerometer Sensor
    mySensor = SM.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);

    // Register sensor listener
    SM.registerListener(this, mySensor, SensorManager.SENSOR_DELAY_NORMAL);

    // Assign TextView
    //xText = (TextView) findViewById(R.id.xText);
    //yText = (TextView) findViewById(R.id.yText);
    //zText = (TextView) findViewById(R.id.zText);
  }


  //@Override
  public void onAccuracyChanged(Sensor sensor, int accuracy) {
    // Not in use
  }
  //@Override
  public void onSensorChanged(SensorEvent event) {
    if (event.values[0] > 40) {
      xText.setText("X: " + "Google Play");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.android.vending");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
    if (event.values[1] > 30) {
      yText.setText("Y: " + "Facebook");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.facebook.katana");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
    if (event.values[2] > 50) {
      zText.setText("Z: " + "Youtube");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.google.android.youtube");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
    if (event.values[0] < -40) {
      xText.setText("X: " + "Twitter");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.twitter.android");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
    if (event.values[1] < -30) {
      yText.setText("Y: " + "Weather");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.accuweather.android");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
    if (event.values[2] < -30) {
      zText.setText("Z: " + "Snapchat");
      Intent launchIntent = getPackageManager().getLaunchIntentForPackage("com.snapchat.android");
      if (launchIntent != null) {
        startActivity(launchIntent);//null pointer check in case package name was not found
      }
    }
  //        yText.setText("Y: " + event.values[1]);
  //        zText.setText("Z: " + event.values[2]);
  }
}
