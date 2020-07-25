import 'reflect-metadata';
import { inject, injectable, Container} from 'inversify';


interface IDatabase {
    connect?(url: string): Promise<void>;
    disconnect?(): Promise<void>;
    save(orderId: number): Promise<void>;

}

@injectable()
class MySQLDataBase implements IDatabase {
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
@injectable()
class NoSQLDataBase implements IDatabase {
    async connect(url: string) {
        console.log("Connected NoSQL")
    }
    async disconnect() {
        console.log("Disconnect NoSQL")
    }
    async save(orderId: number) {
        console.log("save")
    }
}

interface IEmail {
    send(userId: number ,template?: string): Promise<void>;
}
@injectable()
class SimpleEmail implements IEmail {
    async send(userId) {
        console.log(userId)
    }
}
@injectable()
class BeautifulEmail implements IEmail {
    async send(userId, template: string) {
        console.log(userId, template)
    }
}

//Cart
const cartContainer = new Container();
cartContainer.bind<IDatabase>('database').to(MySQLDataBase);
cartContainer.bind<IEmail>('email').to(BeautifulEmail);

@injectable()
class CartService {
    constructor(
        @inject('database') public db: IDatabase,
        @inject('email') public email: IEmail
    ) {}
    async checkout(orderId: number, userId: number) {
        await this.db.connect('localhost');
        await this.db.save(orderId);

        await this.email.send(orderId, 'material');

        await this.db.disconnect();
    }
}

const cart: CartService = cartContainer.resolve<CartService>(CartService);

cartContainer.rebind<IDatabase>('database').to(NoSQLDataBase);

cart.checkout(1,3);