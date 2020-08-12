class MySQLDataBase {
    async connect(url: string) {
        console.log("Connected mySQL")
    }
    async disconnect() {
        console.log("Disconnect mySQL")
    }
    async save(orderId: number) {
        console.log("save")
    }
}
class NoSQLDataBase {
    async connect(url: string, userName: string, password: string) {
        console.log("Connected Mongo")
    }
    async disconnect() {
        console.log("Disconnect Mongo")
    }
    async save(orderId: number) {
        console.log("save")
    }
}

class MockupData {

}
// email
class SimpleEmail {
    async send(userId) {

    }
}
class BeautifulEmail {
    async send(userId) {
        
    }
}
// cart
class Cart {
    async checkout(orderId: number, userId: number) {
        const db = new MySQLDataBase();
        await db.connect('localhost');
        await db.save(orderId);

        const email = new SimpleEmail();
        await email.send(userId);

        await db.disconnect();
    }
}
const newCart = new Cart();
newCart.checkout(2,43)