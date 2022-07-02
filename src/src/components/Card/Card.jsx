import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const PhoneCard = () => (
  <Card
    style={{
      width: 400,
    }}
    cover={
      <img
        alt="example"
        src="https://electrox.shop/wp-content/uploads/2022/03/iphone-13-pro-max-green-select.png"
      />
    }
    actions={[
      // <SettingOutlined key="setting" />,
      <ShoppingCartOutlined />,
      // <EditOutlined key="edit" />,
      // <EllipsisOutlined key="ellipsis" />,
    ]}>
    <Meta title="iPhone 13 Pro " description="The Ultimate iPhone" />
  </Card>
);

export default PhoneCard;
