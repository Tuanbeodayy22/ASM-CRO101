import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BeanDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/robusta.png')} style={styles.beanImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Robusta Beans</Text>
        <Text style={styles.subtitle}>From Africa</Text>
        <Text style={styles.description}>
          Arabic beans are by far the most popular type of coffee beans, making up about 60% of the world's coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia and may even be the first coffee beans ever consumed!
        </Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity style={[styles.sizeButton, styles.selectedSize]}>
            <Text style={styles.sizeText}>250gm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeText}>500gm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeText}>1000gm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>$10.50</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  beanImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#aaa',
    marginBottom: 20,
  },
  description: {
    color: '#ccc',
    marginBottom: 20,
    lineHeight: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  selectedSize: {
    backgroundColor: '#C37B5A',
  },
  sizeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#C37B5A',
    borderRadius: 10,
    padding: 15,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BeanDetailsScreen;
