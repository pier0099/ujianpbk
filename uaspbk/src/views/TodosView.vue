<template>

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
  .completed {
    text-decoration: line-through;
  }
  </style>
  