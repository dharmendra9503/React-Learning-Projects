import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

/*
* AuthService class to interact with the appwrite server
*/
export class AuthService {
    /*
    * Client object to interact with the appwrite server 
    * and account object to interact with the account service
    */
    client = new Client();
    account;

    /*
    * Constructor to initialize the client and account
    */
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    /*
    * Function to create a new account with the given email,
    * password and name on the appwrite server
    */
    async createAccount({ email, password, name }) {
        try {
            /* This is appwrite's function to create a new account */
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            /*
            * If the account is created successfully, then login the user
            */
            if (userAccount) {
                /* This will call login function to login the user */
                return this.login({ email, password });
            } else {
                return userAccount
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    /*
    * Function to login the user with the given email and password
    */
    async login({ email, password }) {
        try {
            /* This is appwrite's function to login the user */
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    /*
    * Function to get the current logged user
    */
    async getCurrentUser() {
        try {
            /* This is appwrite's function to get the current logged user */
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    /*
    * Function to log out the current logged user
    */
    async logout() {
        try {
            /* This is appwrite's function to delete all the session */
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

/*
* Export the authService object to be used in other files
*/
const authService = new AuthService();

export default authService;