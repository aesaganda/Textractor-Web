import { List } from "tabler-react";
import "tabler-react/dist/Tabler.css";

function ListElement() {
  return (
    <div>
      <List.Group>
                <List.GroupItem action active>
                    Already Active
                </List.GroupItem>
                <List.GroupItem action>Another Item</List.GroupItem>
                <List.GroupItem action icon="globe">
                    With an icon!
                </List.GroupItem>
            </List.Group>
    </div>
  )
}

export default ListElement
