import mysqlRequest from "../request/mysqlRequest";

export const getAccount = () => {
    return new Promise((resolve, reject) => {
        resolve({accountId: 1})
    })
}