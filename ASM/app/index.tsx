import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Sửa thành useRouter

const LoginRegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [isLogin, setIsLogin] = useState(true); // true: login, false: register

  const router = useRouter();

  const log = () => {
    const validEmail = 'admin';
    const validPassword = 'admin';

    if (email === validEmail && password === validPassword) {
      router.push('./app/(tabs)'); 
    } else {
      setError('Invalid email or password. Try again!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Welcome to Lungo !!</Text>
      <Text style={styles.subtitle}>{isLogin ? 'Login to Continue' : 'Register to Continue'}</Text>

      {/* Form */}
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Hiển thị thông báo lỗi */}
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Re-type Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
      )}

      {/* Nút Đăng nhập/Đăng ký */}
      <TouchableOpacity style={styles.button} onPress={log}>
        <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Register'}</Text>
      </TouchableOpacity>

      {/* Switch form */}
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin
            ? "Don't have an account? Click Register"
            : 'Have an account? Click Sign In'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#C37B5A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#C37B5A',
    fontSize: 14,
    marginTop: 10,
  },
});

export default LoginRegisterScreen;
