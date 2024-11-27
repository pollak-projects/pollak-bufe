<template>
  <div class="login-container">
    <form class="login-form">
      <h1>Login</h1>
      <label for="username">Felhasználónév</label>
      <input type="text" id="username" />

      <label for="password">Jelszó</label>
      <input :type="isPasswordVisible ? 'text' : 'password'" id="password" />

      <div class="show-password">
        <input
          type="checkbox"
          id="togglePassword"
          v-model="isPasswordVisible"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPasswordVisible: false,
    };
  },
};
</script>

<style scoped>
.login-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #333;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
  text-align: left;
}

input[type="text"],
input[type="password"],
input[type="checkbox"] {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.show-password {
  float: right;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #555;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #789bc0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
