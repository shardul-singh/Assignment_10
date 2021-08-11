import { Request,Response } from "express";
import { pool } from "../db";


//getEmployees
const getEmployees = (req:Request,res:Response)=>{
        pool.query('SELECT * FROM employees',(error,result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows);
        })
}

const getEmployeesAndCustomer = (req:Request,res:Response)=>{
    pool.query('SELECT u.id,u.firstname,u.lastname,u.email,u.phone,c.name,c.website,c.address,r.role_name FROM employees u INNER JOIN customer c ON u.id=c.id INNER JOIN role r ON u.id=r.id',(error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

//get Employee by id
// const getEmployeesbyId = (req:Request,res:Response)=>{
//     const id = parseInt(req.params.id);

//     pool.query('SELECT * FROM employees WHERE id = $1',[id],(error,result)=>{
//         if(error){
//             throw error;
//         }
//         res.status(200).json(result.rows);
//     })
// }
const getEmployeesbyId = (req:Request,res:Response)=>{
    const id = parseInt(req.params.id);

    pool.query('SELECT u.id,u.firstname,u.lastname,u.email,u.phone,c.name,c.website,c.address,r.role_name FROM employees u INNER JOIN customer c ON u.id=c.id INNER JOIN role r ON u.id=r.id WHERE u.id=$1',[id],(error,result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

//add Employee
// const addEmployee = (req:Request,res:Response)=>{
//     const { firstname,lastname,email,phone,address} = req.body;

//     pool.query('INSERT INTO employees (firstname,lastname,email,phone) VALUES ($1,$2,$3,$4)',[firstname,lastname,email,phone],(error,result)=>{
//         if(error){
//             throw error;
//         }

//         res.status(200).send("updated");
//     })

// }
const addEmployee = (req:Request,res:Response)=>{
    const { firstname,lastname,email,phone,name,website,address,role_name} = req.body;

    pool.query('INSERT INTO employees (firstname,lastname,email,phone) VALUES ($1,$2,$3,$4) RETURNING *',[firstname,lastname,email,phone],(error,result)=>{
        if(error){
            throw error;
        }

        res.status(200).send("updated");
    })
    pool.query('INSERT INTO customer (name,website,address) VALUES ($1,$2,$3) RETURNING *',[name,website,address],(error,result)=>{
        if(error){
            throw error;
        }

        res.status(200).send("updated");
    })
    pool.query('INSERT INTO role (role_name) VALUES ($1) RETURNING *',[role_name],(error,result)=>{
        if(error){
            throw error;
        }

        res.status(200).send("updated");
    })

}

//update employee
// const update=(req:Request,res:Response)=>{
//     const id = parseInt(req.params.id)
//     const { firstname,lastname,email,phone,address} = req.body;

//   pool.query(
//     'UPDATE employees SET firstname = $1,lastname=$2, email = $3,phone=$4,address=$5 WHERE id = $6',
//     [firstname,lastname,email,phone,address,id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).send("User modified");
//     }
//   )
// }
const update=(req:Request,res:Response)=>{
    const id = parseInt(req.params.id)
    const { firstname,lastname,email,phone,name,website,address,role_name} = req.body;

  pool.query(
    'UPDATE employees SET firstname = $1,lastname=$2, email = $3,phone=$4 WHERE id = $5',
    [firstname,lastname,email,phone,id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send("User modified");
    }
  )
  pool.query(
    'UPDATE customer SET name = $1,website=$2, address = $3 WHERE id = $4',
    [name,website,address,id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send("User modified");
    }
  )
  pool.query(
    'UPDATE role SET role_name = $1 WHERE id = $2',
    [role_name,id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send("User modified");
    }
  )
}

//delete employee
// const deleteUser = (req:Request, res:Response) => {
//     const id = parseInt(req.params.id)
  
//     pool.query('DELETE FROM employees WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       res.status(200).send(`User deleted Successfully`)
//     })
//   }
const deleteUser = (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
  
    pool.query('DELETE FROM employees WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User deleted Successfully`)
    })
    pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User deleted Successfully`)
      })
    pool.query('DELETE FROM role WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User deleted Successfully`)
      })
  }

export = {
    getEmployees,
    getEmployeesAndCustomer,
    getEmployeesbyId,
    addEmployee,
    update,
    deleteUser,
};