<template>
  <div class="menu-bar">

    <div class="logo">
      <img src="/images/Logo/logo.png" alt="Melon logo" />
    </div>

    <div class="search-wrapper">
      <select>
        <option value="all">All Category</option>
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
        <option value="meat">Meat</option>
      </select>

      <input
        type="text"
        placeholder="Search for items..."
      />
    </div>
    <div class="right-menu">
      <span>Account</span>
      <span>Compare</span>
      <span>Wishlist</span>
      <span>Cart</span>
    </div>

  </div>
  <div class = "main-menu">
      <ul>
        <li>
          <select id = "browse">
            <option>Browse All Categories</option>
          </select>
        </li>
        <li>Hot Deals</li>
        <li>Home</li>
        <li>
          <select id = "food">
            <option>Food</option>
          </select>
        </li>
        <li>
          <select id = "vage">
            <option>Vegetable</option>
          </select>
        </li>
        <li>Drinks</li>
        <li>Cookies</li>
        <li>Meats & Sea food</li>
        <img src="/images/Logo/help.png" alt="" id = "help">
      </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background: #ffffff;
  border-bottom: 1px solid #eee;
}

.logo img {
  margin-left: 30px;
  width: 180px;
  height: auto;
}

.search-wrapper {
  display: flex;
  align-items: center;
  border: 2px solid #2e7d32;
  border-radius: 6px;
  overflow: hidden;
  width: 800px;
}

.search-wrapper select {
  border: none;
  padding: 8px 10px;
  background: #f6f6f6;
  font-size: 13px;
  outline: none;
}

.search-wrapper input {
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  width: 800px;
  height: 30px;
}

.right-menu span {
  margin-right: 30px;
  font-size: 18px;
  cursor: pointer;
}
.main-menu{
  border-bottom: 1px solid #eee;
}
.main-menu ul{
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin: 0;
  padding: 0;
  width: 100%;
}
.main-menu li {
  margin: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  white-space: nowrap;
  cursor: pointer;
}
#browse{
  margin: 10px;
  text-align: center;
  height: 45px;
  width: 220px;
  background-color: #3BB77E;
  font-size: 18px;
  color: #ffffff;
  border: none;
}
#food, #vage{
  margin: 10px;
  height: 32px;              /* smaller than browse */
  padding: 0 8px;
  border: none;
  font-size: 18px;
  background-color: white;
  line-height: 32px;
}
select{
  outline: none;
}
#help{
  padding-left: 50px;
  margin-top: 15px;
  width: auto;
  height: 40px;
  
}
</style>
