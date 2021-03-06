import 'package:PicoloFake/constants/ColorPalettes.dart';
import 'package:flutter/material.dart';
import 'dart:math';
import 'package:hexcolor/hexcolor.dart';

import "constants/ListPhrases.dart";

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Picolo Fake',
      home: MyHomePage(title: 'Mamacita'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String randomPhrase = listPhrases[Random().nextInt(listPhrases.length)];

  int randomNumber;

  static int firstNumber = Random().nextInt(colorPalettes.length);

  String randomBackgroundColor = colorPalettes[firstNumber][0];

  String randomContentColor = colorPalettes[firstNumber][1];

  void _changePhrase() {
    setState(() {
      randomPhrase = listPhrases[Random().nextInt(listPhrases.length)];
      randomNumber = Random().nextInt(colorPalettes.length);
      randomBackgroundColor = colorPalettes[randomNumber][0];
      randomContentColor = colorPalettes[randomNumber][1];
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      backgroundColor: Hexcolor(randomBackgroundColor),
      body: Center(
          // Center is a layout widget. It takes a single child and positions it
          // in the middle of the parent.
          child: Padding(
        padding: EdgeInsets.all(25.0),
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '$randomPhrase',
              style: TextStyle(
                  fontFamily: "Modelica",
                  fontSize: 35,
                  fontWeight: FontWeight.bold,
                  color: Hexcolor(randomContentColor)),
            ),
          ],
        ),
      )),
      floatingActionButton: FloatingActionButton(
        backgroundColor: Hexcolor(randomContentColor),
        onPressed: _changePhrase,
        tooltip: 'Nuova frase',
        child: Icon(Icons.cached,color: Hexcolor(randomBackgroundColor),),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
