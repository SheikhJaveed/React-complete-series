function customRender(reactElement,container){

    /*
    const domElement =  document.createElement(reactElement.type) //create a new element
    domElement.innerHTML = reactElement.children //set the innerHTML of the element
    domElement.setAttribute('href', reactElement.props.href) //set the href attribute of the element
    domElement.setAttribute('target', reactElement.props.target) //set the target attribute of the element
    container.appendChild(domElement) //append the element to the container
    */

    //optimized version of the above code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue;//skip the children prop
        }
        //setAttribute(prop, value) sets the value of the prop
        domElement.setAttribute(prop, reactElement.props[prop]) //reactElement.props[prop] is the value of the prop
        container.appendChild(domElement)
    }

}

//this is how a react element is rendered in the browser
const reactElement = {
    type: 'a',
    props : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
    //props and children can be named anything
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer) //this is a custom render function like ReactDOM.render