import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    storage;

    /*
    * Constructor to initialize the client, databases and storage
    */
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    /*
    * Function to create post with the given params
    */
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            /* This is appwrite's function to create a new document */
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, /* slug as document id */
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    /*
    * Function to update post with the given slug and params
    */
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            /* This is appwrite's function to update a document */
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    /*
    * Function to delete post with the given slug
    */
    async deletePost(slug) {
        try {
            /* This is appwrite's function to delete a document */
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    /*
    * Function to get single post with the given slug
    */
    async getPost(slug) {
        try {
            /* This is appwrite's function to get a document */
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    /*
    * Function to get all posts with the given queries
    */
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            /* This is appwrite's function to get all documents */
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    /*
    * Function to get all posts of a user with the given userId
    */
    async getUserPosts(userId) {
        try {
            /* This is appwrite's function to get all documents */
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("userId", userId)]
            )
        } catch (error) {
            console.log("Appwrite service :: getUserPosts :: error", error);
            return false;
        }
    }

    /*
    * Function to upload a file
    */
    async uploadFile(file) {
        try {
            /* This is appwrite's function to upload a file */
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    /*
    * Function to delete a file
    */
    async deleteFile(fileId) {
        try {
            /* This is appwrite's function to delete a file */
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    /*
    * Function to get a file preview
    */
    getFilePreview(fileId) {
        /* This is appwrite's function to get a file preview, This will return a url */
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}

const service = new Service();

export default service;