<template>
    <div class="posts">
      <h1>Postingan User</h1>
  
      <div>
        <label for="user-select">Pilih User:</label>
        <select id="user-select" v-model="selectedUser" @change="fetchPosts">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
  
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
        selectedUser: null,
        posts: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      async fetchPosts() {
        if (this.selectedUser) {
          try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
            this.posts = response.data;
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* styles go here */
  </style>
  