 import React from 'react'
 
 const Lists = Array.from({lenght:1000},(_,i)=>({
id:i+1,
user:`User ${i+1}`,
age:Math.floor(Math.random()*60)+18,
country:["Canada",'USA','Russia','Rwanda','Uganda','South Africa','Jamaica'][Math.floor(Math.random())*7]
 }))
 
 
 export default Lists