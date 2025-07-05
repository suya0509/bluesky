import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return;
    const newTodo = { id: Date.now().toString(), text: todo };
    setTodoList([...todoList, newTodo]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧁 투두리스트</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="할 일을 입력하세요"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="추가" onPress={addTodo} color="#a78bfa" />
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>• {item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6f0', // 연한 베이지
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
    color: '#a78bfa', // 연보라색
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d8b4fe',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff0f6', // 파스텔 핑크
    marginRight: 10,
  },
  todoItem: {
    backgroundColor: '#e0f2fe', // 파스텔 하늘색
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#a5f3fc', // 밝은 민트색 포인트
  },
  todoText: {
    fontSize: 18,
    color: '#4b5563',
  },
});
