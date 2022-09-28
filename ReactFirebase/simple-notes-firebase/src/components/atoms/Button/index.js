import React from 'react';

const Button = ({title, onClick, loading}) => {
    /// artinya jika loading bernilai true/ loading === true
    if (loading){
        return <button className='btn disable'>Loading...</button>
    }
    return (
        <button className='btn' onClick={onClick}>{title}</button>
    )
}

export default Button;