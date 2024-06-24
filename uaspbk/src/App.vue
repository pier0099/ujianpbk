<template>
  <div class="app">
    <!-- Header dengan menu -->
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/todos">Todos</router-link></li>
          <li><router-link to="/posts">Posts</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Konten utama -->
    <div class="main-content">
      <h1>Daftar Kegiatan</h1>

      <!-- Form untuk menambahkan kegiatan -->
      <form @submit.prevent="addActivity">
        <input type="text" v-model="newActivity" placeholder="Tambahkan kegiatan baru" />
        <button type="submit" style="margin-right: 10px;">Tambah</button>
      </form>

      <!-- Kotak untuk menyimpan filter -->
      <div class="filter-box">
        <!-- Filter untuk menampilkan semua kegiatan -->
        <button @click="showAll">Semua</button>
        <!-- Filter untuk menampilkan kegiatan yang belum selesai -->
        <button @click="showPending">Belum Selesai</button>
        <!-- Filter untuk menampilkan kegiatan yang sudah selesai -->
        <button @click="showCompleted">Selesai</button>
      </div>

      <!-- Daftar kegiatan -->
      <ul>
        <li v-for="(activity, index) in filteredActivities" :key="index">
          <input type="checkbox" v-model="activity.completed" />
          <span :class="{ completed: activity.completed }">{{ activity.name }}</span>
          <button @click="cancelActivity(index)">Batalkan</button>
        </li>
      </ul>
    </div>

    <!-- Routing untuk konten Todos dan Posts -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      filter: 'all',
    };
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ name: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    cancelActivity(index) {
      this.activities.splice(index, 1);
    },
    showAll() {
      this.filter = 'all';
    },
    showPending() {
      this.filter = 'pending';
    },
    showCompleted() {
      this.filter = 'completed';
    },
  },
  computed: {
    filteredActivities() {
      if (this.filter === 'pending') {
        return this.activities.filter(activity => !activity.completed);
      } else if (this.filter === 'completed') {
        return this.activities.filter(activity => activity.completed);
      } else {
        return this.activities;
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
}

nav ul li a:hover {
  background-color: #555;
  border-radius: 5px;
}

.main-content {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #45a049;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
}

.filter-box {
  margin-bottom: 20px;
}

.filter-box button {
  margin-right: 10px;
}
</style>
