import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const coffeeData = [
    { id: '1', title: 'Cappuccino', subtitle: 'With Steamed Milk', price: '$4.20', image: require('../../assets/capuchino.png') },
    { id: '2', title: 'Cappuccino', subtitle: 'With Foam', price: '$4.20', image: require('../../assets/capuchino2.png') },
    { id: '3', title: 'Robusta Beans', subtitle: 'Medium Roasted', price: '$4.20', image: require('../../assets/robusta.png') },
    { id: '4', title: 'Robusta Beans', subtitle: 'Medium Roasted', price: '$4.20', image: require('../../assets/robusta.png') },
  ];

  const renderCoffeeItem = ({ item }: { item: { id: string; title: string; subtitle: string; price: string; image: any } }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find the best coffee for you</Text>
      <TextInput style={styles.searchBar} placeholder="Find Your Coffee..." placeholderTextColor="#aaa" />

      <FlatList
        data={coffeeData}
        keyExtractor={(item) => item.id}
        renderItem={renderCoffeeItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    marginBottom: 20,
  },
  flatList: {
    flex: 1,
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '48%',
  },
  cardImage: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    color: '#aaa',
    marginBottom: 10,
  },
  cardPrice: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#C37B5A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
