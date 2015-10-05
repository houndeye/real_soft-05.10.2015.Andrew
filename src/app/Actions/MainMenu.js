import Reflux from 'reflux'

export default Reflux.createActions(
    [{"load": {children: ["completed", "failed"]}},
        "select"
    ]);

