import React from 'react'

//we can use the props in the functional component like
/**
     function Card(props) {
         return (
             <div>
                 <h1>{props.title}</h1>
             </div>
         )
     }
 */
//but we can also destructure the props in the function signature
/*
    function Card({title="Default title"}) { //default value for title if props are not passed
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
*/
const Card = ({username="user1",role="not assigned yet"}) => {
  return (
    <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
               {role}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card;
