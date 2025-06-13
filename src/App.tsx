import ListGroup from './components/ListGroup';
function App(){

  const items = [
          'An first item',
          'A second item',
          'A third item',
          'A fourth item',
          'And a fifth one'
      ];
  
      const handleSelectItem = (item:string) => {
        console.log(item)
      }
  return <div>
    <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}></ListGroup> 
    </div>
}

export default App;