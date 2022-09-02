# Browser Bot 🤖

## Introduction

This project explores how to established bi-directional communication between the web browser and an Arduino micro controller.

Traditionally, the Arduino is programmed using the Arduino IDE to write "sketches" which are then compiled and uploaded to the Arduino's micro processor. The idea being, that once a sketch has been uploaded, the Arduino is a "stand-alone" device, processing i/o of connected peripheral devices and circuits.  

For this project however, we will be using Node and various Node Framework/Libraries to access the Arduino's i/o connections via an add on Ethernet Shield (Interface).

In order to do this, we will be uploading the StandardFirmataEthernet Arduino Library to the Arduino's micro processor. This library allows us to connect an ethernet shield (interface) to the Arduino providing access to the Arduino's i/o connections directly from another machine using other programming languages such as JavaScript. 

We will then set up a Node Application using Express, Socket.io, Johnny-Five, which will serve up a Browser Based UI, and provide WebSocket communication between the UI and the Arduino. 

## SetUp

### Configuring the Arduino

- Install StandardFirmataEthernet



