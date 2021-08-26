
import axios from 'axios'
require('dotenv').config()
const BACK_SERVER = process.env.REACT_APP_BACK_SERVER


export async function getAllCategorys() {

    try {
        const category = await axios.get(`${BACK_SERVER}/category`)
        return category.data
    } catch (err) {
        throw err
    }

}

export async function getAllSubcategorys() {

    try {
        const subcategory = await axios.get(`${BACK_SERVER}/subcategory`)
        return subcategory.data
    } catch (err) {
        throw err
    }

}

export async function getAllReferences() {

    try {
        const references = await axios.get(`${BACK_SERVER}/reference`)
        return references.data
    } catch (err) {
        throw err
    }

}

export async function getAllPendingReferences(userAcces) {

    try {
        const references = await axios.get(`${BACK_SERVER}/reference/pending`,{
            headers: { Authorization: `Bearer ${userAcces}` }
        })
        return references.data
    } catch (err) {
        throw err
    }

}

export async function newReference(data) {

    try {
        const reference = await axios.post(`${BACK_SERVER}/reference`, data)
        return reference
    } catch (err) {
        throw err
    }

}

export async function updateReference(data, id, userAcces) {

    try {
        const reference = await axios.put(`${BACK_SERVER}/reference/${id}`, data,{
            headers: { Authorization: `Bearer ${userAcces}` }
        })
        return reference
    } catch (err) {
        throw err
    }

}

export async function searchByNameApi(search) {

    try {
        const reference = await axios.get(`${BACK_SERVER}/reference?search=${search}`)
        return reference.data
    } catch (err) {
        throw err
    }

}

export async function registerUser(data) {

    try {
        const user = await axios.post(`${BACK_SERVER}/user/register`, data)
        return user
    } catch (err) {
        throw err
    }

}

export async function loginUser(data) {

    try {
        const user = await axios.post(`${BACK_SERVER}/user/login`, data)
        return user
    } catch (err) {
        throw err
    }

}


export async function getAportant() {

    try {
        const aportants = await axios.get(`${BACK_SERVER}/aportants`)
        return aportants
    } catch (err) {
        throw err
    }

}