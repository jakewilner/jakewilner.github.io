function MyTable(probs) {

    let body = probs.map(({p, index}) => (
        <tr>
            <th>{index}</th>
            <td>{p}</td>
        </tr>
    ))


    return(
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col"># hits</th>
            <th scope="col">Roll Needed</th>
            </tr>
        </thead>
        <tbody>
            {body}
        </tbody>
    </table>
    )
}

export default MyTable;