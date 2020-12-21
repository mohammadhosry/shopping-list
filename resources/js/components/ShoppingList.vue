<template>
    <div class="main">
        <div>
            <h4 class="header">add your item here</h4>
            <ul>
                <li v-for="(item, index) in products" :key="item.id">
                    <input type="checkbox" v-model="basket" :value="item.id" style="width:unset">
                    <span :class="{'in-basket': basket.includes(item.id)}" @click="selectedIndex = index">{{ item.name }}</span>
                    <span class="delete" @click="products = products.filter(prd => prd.id != item.id)">X</span>
                </li>
                <li><input v-model="newItem" type="text" @keyup.enter="addItem" placeholder="Add Item"></li>
            </ul>
        </div>
        <div class="details" v-if="selectedIndex >= 0 && products[selectedIndex]">
            <h4 class="header">{{ products[selectedIndex].name }} DETAILS</h4>
            <form>
                <label>Quantity</label>
                <input type="number" v-model="products[selectedIndex].quantity">
                <label>Price</label>
                <input type="nubmer" v-model="products[selectedIndex].price">
                <label>Description</label>
                <textarea v-model="products[selectedIndex].description" cols="30" rows="2"></textarea>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Milk',
                    quantity: 4,
                    price: 6,
                    description: 'Nice white milk',
                },
                {
                    id: 2,
                    name: 'Bread',
                    quantity: 2,
                    price: 8,
                    description: 'Nice white bread',
                },
            ],
            basket: [],
            selectedIndex: -1,
            newItem: '',
        }
    },
    methods: {
        addItem() {
            if (this.newItem != '') {
                this.products.push({
                    id: (new Date).getTime(),
                    name: this.newItem,
                    quantity: 0,
                    price: 0,
                    description: '',
                })
                this.newItem = ''
                this.selectedIndex = this.products.length - 1
            }
        },
    },
}
</script>

<style scoped>
.main {
    display: flex;
}
h4 {
    margin: 0;
    text-transform: uppercase;
}
ul, .details {
    border: 1px solid #d3d3d3;
}
ul {
    width: 300px;
    list-style: none;
    padding: 0;
    padding-top: 10px;
    margin: 0;
    min-height: 400px;
}
li {
    padding: 5px 10px;
    border-bottom: 1px solid #d3d3d3;
}

li, .delete {
    cursor: pointer;
}

.details {
    margin-left: 15px;
    width: 600px;
}
label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
}
form {
    padding: 15px;
}
input, textarea {
    padding: 5px 10px;
    width: 100%;
    box-sizing: border-box;
}
.delete {
    color: red;
    float: right;
}
.in-basket {
    text-decoration: line-through;
    color: #afabab;
}
</style>