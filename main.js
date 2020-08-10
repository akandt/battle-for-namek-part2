const productArray = [
    {
        brand: 'Superior',
        item: 'DRT-3500',
        quantity: 11
    },
    {
        brand: 'Empire',
        item: 'Boulevard',
        quantity: 7
    },
    {
        brand: 'Montigo',
        item: 'Delray',
        quantity: 5
    },
    {
        brand: 'Napoleon',
        item: 'Vector',
        quantity: 3
    },
  ];

class WoodlandDirect {
    constructor(warehouse) {
        this.inventory = warehouse;
    }

    // Get List of Hearths in Inventory
    getInventory() {
        console.log('Fireplace inventory:', this.inventory);
    }

    // Find item
    getItem(item){
        let hasItem = false;
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].item === item && this.inventory[i].quantity > 0){
                hasItem = true;
            }
        }
        if (hasItem){
            console.log('We have it in stock');
        } else {
            console.log(`We're out of that item`);
        }
    }

    // Add Hearth to Inventory
    addHearthToInventory(brand, item) {
        this.inventory.push({ brand, item });
    }

    // Remove Hearth from Inventory
    removeHearthFromInventory(item) {
        for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].item === item) {
            this.inventory.splice(i, 1);
            }
        }
        console.log("This is the new hearth list", this.inventory);
    }

    // Edit Hearth in Inventory
    editHearth(item, newQuantity) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].item === item) {
                this.inventory[i].quantity =  newQuantity;
            }
            console.log("This is the new quantity", this.inventory[i].quantity);
        }
    }
}

const cuiStore = new WoodlandDirect(productArray);
cuiStore.editHearth('Delray', 30);