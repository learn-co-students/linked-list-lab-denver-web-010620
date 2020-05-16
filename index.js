function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[nextAddress]
}

function nodeAt(idx, linkedList, collection) {
    let node = collection[linkedList]
    
    for(let i = 0; i < idx; i++) {
        node = next(node, collection)
    }

    return node
}

function addressAt(idx, linkedList, collection) {
    let address = linkedList

    for(let i = 0; i < idx; i++) {
        let node = collection[address]
        address = node.next 
    }

    return address
}

function indexAt(node, collection, linkedList) {
    let address = linkedList
    let idx = 0

    while(node !== collection[address]) {
        address = collection[address].next
        idx++
    }

    return idx
}

function insertNodeAt(idx, address, linkedList, collection) {
    let newNode = collection[address]

    if(idx === 0) {
        newNode.next = linkedList
    } else if(idx === Object.keys(collection).length - 1) {
        let targetNode = nodeAt(idx, linkedList, collection)
        targetNode.next = address
    } else {
        let targetNode = nodeAt(idx - 1, linkedList, collection)
        console.log(targetNode)
        newNode.next = targetNode.next
        targetNode.next = address
    }
}

function deleteNodeAt(idx, linkedList, collection) {
    let targetNode = nodeAt(idx - 1, linkedList, collection)
    targetNode.next = next(targetNode, collection).next
}