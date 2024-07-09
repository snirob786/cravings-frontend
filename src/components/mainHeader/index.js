import styles from "./main-header.module.css"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Anchor, Col, Layout, Menu, Row, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;
const { Link } = Anchor;
export default function MaindHeader() {
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];
    return (
        <Header className={styles.headerBgLight}>
            <Row justify="space-between" align="middle">
                <Col span={4} className="demo-logo">
                    <Link href="/" title={<Title className={styles.headerTitle}>Test</Title>}></Link>
                </Col>
                <Col span={12}>
                    <Menu
                        className={styles.menuContainer}
                        mode="horizontal"
                        defaultSelectedKeys={['4']}
                        items={items}
                    />
                </Col>
            </Row>
        </Header >
    )
}
