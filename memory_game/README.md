# Game Instructions

You start with an empty grid that is X by Y (make it configurable). Tell the player to get ready, then highlight a number of cells (also configurable) for a few seconds while telling the user to memorize those cells. The game then goes into “Recall” mode, where the user is challenged to remember those cells after we clear the cells from the grid. If they guess a correct cell, mark it green, and if they guess a wrong cell, mark it red. They win if they guess all the right cells with a maximum of two wrong attempts.

# Notes

### The virtual DOM

Suppose we have three products with their names and prices displayed in the browser. Now, if we make an AJAX call
which tells us that the price for product #2 changes, we now have a fourth product to display.

React has the original user interface state for three products stored in memory. Before sending anything to the browser,
React will compute the new state, which now has four products.

With both states available in memory now, React can compute differences between the new state and the original state and it can conclude that it needs to add a node #4 and modify node #2.
All other nodes will remain unchanged.

Having the original state in memory represents a big performance benefit. Other frameworks that don't have an original state in memory have two options

1. Generate the new UI and replace the whole tree in the browser
2. Try to change nodes #2 and #4 but rely on what is in the DOM. This results in making a bunch of READ operations in the DOM and processing the tree to figure out where node #2 begins and where node #3 ends. These operations are usually expensive.

### Component Children

Just like we can include HTML elements within the opening and closing tags of another HTML element, we can also include React elements within the opening and closing tags of another React element. We can mix HTML and React elements in both cases.

```javascript
<Counts>
	<TweetsCount />
	<FollowingCount />
	<FollowersCount />
</Counts>
```

```javascript
class Count extends React.Component {
	render() {
		<div id="counts-header">{this.props.children}</div>;
	}
}
```

React's tree reconciliation process uses the order of the children in the diffing algorithm.
This means that if the child is removed from the tree, all siblings after it will need to be updated in the process.

To force React to respect the idenitity and state of each child in a list, we need to uniquely identify each child instandce byy assigning it a key prop.

```javascript
class ProductList extends React.Component{
    render(){
        <div>
            {this.products.map(product=>{
             return(
                 <Product key={product.id} product={product}>
             )
            })}
        </div>
    }
}
```


