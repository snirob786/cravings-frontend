import { Col, Layout, Menu, Row, Typography } from "antd"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import styles from "./dashboard-header.module.css"
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function DashboardHeader() {
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
        <Layout>
            <Header className={styles.headerConatiner}>
                <Row justify="space-between" align="middle" className={styles.headerContentWrapper}>
                    <Col span={4} className="demo-logo">
                        <Title className={styles.headerTitleColor}>Test</Title>
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
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, minHeight: 360 }}>content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}
