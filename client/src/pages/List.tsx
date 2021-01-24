import React from 'react';
import { Button, Modal } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';

import Form from '../components/Form';
import { ListPageContainer, ItemsContainer, ItemContainer } from '../components/Container';
import ItemContext, { ItemConsumer } from '../context/item.context';
import { postItem } from '../actions/item.actions';
import { ITodo, IItemListProps, IItemListState } from '../interface/item.interface';

class ItemList extends React.Component<IItemListProps, IItemListState> {
  static contextType = ItemContext;
  state = { isModalOpen: false };

  renderTodoItems = (items: ITodo[]): React.ReactNode[] => {
    const renderItems: React.ReactNode[] = items.map((item, index) => (
      <ItemContainer key={index}>
        <span>{item.todo}</span>
        <span>{item.checked ? <CheckCircleOutlined /> : <CloseCircleOutlined />}</span>
      </ItemContainer>
    ))
    return renderItems;
  }

  openAddModal = (): void => {
    this.setState({ isModalOpen: true });
  }

  closeAddModal = (): void => {
    this.setState({ isModalOpen: false });
  }

  onSubmit = async (values: ITodo): Promise<void> => {
    await postItem(values);
    this.context.getItems();
    this.closeAddModal();
  };
  
  render() {
    const { isModalOpen } = this.state;
    return (
      <ListPageContainer>
        <Button onClick={() => this.openAddModal()} icon={<PlusOutlined />} type="primary">Add Item</Button>
        <ItemsContainer>
          <ItemConsumer>
            {(itemContext) => this.renderTodoItems(itemContext.items)}
          </ItemConsumer>
        </ItemsContainer>
        <Modal
          title="Add Item"
          visible={isModalOpen}
          onCancel={this.closeAddModal}
          footer={null}
        >
          <Form onSubmit={this.onSubmit} />
        </Modal>
      </ListPageContainer>
    )
  }
}

export default ItemList;