# Browser Bot 🤖

## Introduction

This project explores how to established realtime bi-directional communication between the browser and a LAN networked Arduino microcontroller.

Traditionally, the Arduino is programmed using the dedicated Arduino IDE to code "sketches" using a variant of the C++ programming language. The sketches are then compiled and uploaded to the Arduino's microprocessor. The basic premise being that the Arduino is a "stand-alone" device, processing i/o of connected peripheral devices and circuits. 

There are a myriad of ways and reasons to connect an Arduino to other devices and networks which usually involve attaching additional "shields" or breakout boards, and including the neccesary Arduino Libraries to your sketches. 

For this project, we will be operating the Arduino as a networked device by attaching an Ethernet Shield to the Arduino and uploading the necessary Arduino Libraries. The Arduino will then be able to receive instructions from a NodeJS application running on another computer. 

This has several benefits: 

- We only have to use one programming language to develop our application, in our case JavaScript. 
- We can develop our application using an IDE with a richer feature set & ecosystem, such as VSCode.
- Our application is not constrained by the limited memory and processing power of the Arduino's microprocessor. 
- We have access to the rich Node/NPM ecosystem to add features to our application. 

## Hardware

Here's a list of the hardware we will be using for this project: 

- An Arduino <br>
![Arduino](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/220px-Arduino_Uno_-_R3.jpg) 
- Arduino Ethernet Shield <br>
![Arduino Ethernet Shield](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Arduino_Ethernet_Board.jpg/1280px-Arduino_Ethernet_Board.jpg)
- USB A to B Cable
- Ethernet Cable
- Raspberry Pi <br>
![Raspberry Pi](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg/800px-Raspberry_Pi_4_Model_B_-_Side.jpg)

## SetUp

### Configuring the Arduino

First we need to install a couple of Arduino Libraries onto our Arduino. 


- Install StandardFirmataEthernet onto the Arduino.
- 



