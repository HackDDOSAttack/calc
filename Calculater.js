import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export function Calculater(panel){

  let num = panel;
  let re = "+";
  let sum = num.split('+');
  let count = Number(sum[0]) + Number(sum[1]);
  return count;
}

export default Calculater;
