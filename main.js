import { BinaryTreeNode, drawBinaryTree, VisualizationType, setTheme } from 'binary-tree-visualizer';
let opt = {
    textFont:20,
    strokeColor:'#3772de',
    colorArray: [{
        borderColor: '#0080ff',
        bgColor: "#fff"
    }]
};
setTheme(opt);
const insertBtn = document.querySelector("button");
insertBtn.addEventListener("click", ()=>{
    if(root.value==" "){
        root = new BinaryTreeNode(parseInt(document.getElementById("element").value));
        draw();
    }
    else{
        insert(root,parseInt(document.getElementById("element").value));
        draw();
    }
})
function insert(node, value){
    if(node.value==value)
        return;
    if(value<node.value){
        if(node.left!=undefined){
            insert(node.left,value);
            return;
        }
        node.setLeft(new BinaryTreeNode(value));
        return;
    }
        if(node.right!=undefined){
            insert(node.right,value);
            return;
        }
        node.setRight(new BinaryTreeNode(value));
}

let preorderArray = [];
function preorder(node, temp){
    if(node!=undefined){
        preorderArray.push(node.value);
        preorder(node.left,1);
        preorder(node.right,0);
    }
}
let inorderArray = [];
function inorder(node,temp){
    if(node!=undefined){
        inorder(node.left,1);
        inorderArray.push(node.value);
        inorder(node.right,0);
    }
}
let postorderArray = [] ;
function postorder(node, temp){
    if(node!=undefined){
        postorder(node.left,1);
        postorder(node.right,0);
        postorderArray.push(node.value);
    }
}
const preorderBtn = document.querySelectorAll("button")[1];
const inorderBtn = document.querySelectorAll("button")[2];
const postorderBtn = document.querySelectorAll("button")[3];

preorderBtn.addEventListener("click",()=>{
    preorderArray = [];
    preorder(root,-1);
    const element = document.getElementById("output_1");
    if(element!=undefined)
        element.remove();
    const output_1 = document.createElement("h2");
    output_1.setAttribute("id","output_1");
    let textnode = document.createTextNode("Preorder: [");
    output_1.appendChild(textnode); 
    textnode = document.createTextNode(preorderArray);
    output_1.appendChild(textnode); 
    textnode = document.createTextNode("]");
    output_1.appendChild(textnode); 
    document.getElementById("output").appendChild(output_1);
})

inorderBtn.addEventListener("click",()=>{
    inorderArray = [];
    inorder(root,-1);
    const element = document.getElementById("output_1");
    if(element!=undefined)
        element.remove();
    const output_1 = document.createElement("h2");
    output_1.setAttribute("id","output_1");
    let textnode = document.createTextNode("Inorder: [");
    output_1.appendChild(textnode); 
    textnode = document.createTextNode(inorderArray);
    output_1.appendChild(textnode); 
    textnode = document.createTextNode("]");
    output_1.appendChild(textnode); 
    document.getElementById("output").appendChild(output_1);
})

postorderBtn.addEventListener("click",()=>{
    postorderArray = [];
    postorder(root,-1);
    const element = document.getElementById("output_1");
    if(element!=undefined)
        element.remove();
    const output_1 = document.createElement("h2");
    output_1.setAttribute("id","output_1");
    let textnode = document.createTextNode("Postorder: [");
    output_1.appendChild(textnode); 
    textnode = document.createTextNode(postorderArray);
    output_1.appendChild(textnode); 
    textnode = document.createTextNode("]");
    output_1.appendChild(textnode); 
    document.getElementById("output").appendChild(output_1);
})

function draw(){
    drawBinaryTree(root,document.querySelector("canvas"),{type:VisualizationType.HIGHLIGHT});
}
let root = new BinaryTreeNode(" ");
draw();