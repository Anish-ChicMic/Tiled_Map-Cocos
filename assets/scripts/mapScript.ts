import { _decorator, BoxCollider2D, Component, EPhysics2DDrawFlags, ERigidBody2DType, input, Input, Node, PhysicsSystem2D, RigidBody2D, TiledLayer, TiledMap, TiledTile, tween, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mapScript')
export class mapScript extends Component {

    @property({ type: Node })
    myBall: Node = null;
    myMapLayer = null;

    onLoad() {
        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

        // console.log(this.myMapLayer);
    }
    start() {

        let wid = this.node.parent.getComponent(UITransform).width;
        let hei = this.node.parent.getComponent(UITransform).height;
        console.log(wid, hei);

        this.node.getComponent(UITransform).setAnchorPoint(0, 0);
        this.node.setPosition(new Vec3(-wid * 0.5, -hei * 0.5))
        this.myMapLayer = this.node.getComponent(TiledMap).getLayer('middleLayer1');
        this.enablecollision('middleLayer1');
        console.log(this.node.getPosition());

    }

    update(deltaTime: number) { }

    enablecollision(name) {
        let layer: TiledLayer = this.myMapLayer;
        console.log(layer);

        let wid = this.node.parent.getComponent(UITransform).width;
        let hei = this.node.parent.getComponent(UITransform).height;
        layer.node.getComponent(UITransform).setAnchorPoint(0, 0);
        // layer.node.setPosition(new Vec3(-wid * 0.5, -hei * 0.5, 0))

        let tilesize = layer.getMapTileSize();
        for (let i = 0; i < layer.getLayerSize().width; i++) {
            for (let j = 0; j < layer.getLayerSize().height; j++) {
                let tile: TiledTile = layer.getTiledTileAt(i, j, true);
                // console.log(tile.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(tile.node)))
                if (tile.grid === 0) {
                    tile.addComponent(RigidBody2D);
                    tile.getComponent(RigidBody2D).type = ERigidBody2DType.Static;
                    tile.getComponent(RigidBody2D).allowSleep = false;
                    tile.getComponent(RigidBody2D).awakeOnLoad = true;
                    tile.getComponent(RigidBody2D).gravityScale = 0;
                    let collider = tile.addComponent(BoxCollider2D);
                    collider.size = tilesize;
                    collider.density = 1000;
                    collider.restitution = 0;
                    collider.group = 1 << 2;
                    collider.offset = new Vec2(tilesize.width / 2, tilesize.height / 2)
                    collider.apply();
                }
            }
        }
    }

    // Keyborad Event
    onKeyDown = () => {
        console.log("Press a key");
        let linVel = this.myBall.getComponent(RigidBody2D).linearVelocity;
        this.myBall.getComponent(RigidBody2D).linearVelocity = new Vec2(-(linVel.x + 10), -(linVel.y + 20));
    };

    onKeyUp = () => {
        console.log("Release a key");
    };

}

