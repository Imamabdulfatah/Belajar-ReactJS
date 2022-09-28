import React, {Component, Fragment} from 'react';
import './Dashboard.scss';
import {addDataToAPI, deleteDataFromAPI, getDataFromAPI, updateDataFromAPI} from '../../../config/redux/action'
import {connect} from 'react-redux';
// import { getDatabase, ref, onValue} from "firebase/database";

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: '',
        textButton: 'SIMPAN',
        noteId : ''
    }
    /// uji coba local strorange
    // componentDidMount() {
    //     const userData = localStorage.getItem('userData')
    //     /// merubah dari string => object agar mudah dibaca system
    //     console.log('dashboard : ', JSON.parse(userData))
    // }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        // console.log('dashboard: ', JSON.parse(userData))
        this.props.getNotes(userData.uid);
    }

    handleSaveNotes = () => {
        const {title, content, textButton, noteId} = this.state;
        const {saveNotes, updateNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title : title,
            content : content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        // logic untuk update
        if(textButton === 'SIMPAN'){
            saveNotes(data)
        // data.noteId digunakan data tambahan baru
        }else{
            data.noteId = noteId
            updateNotes(data)
        }
        console.log(data)
    }

    // disini kita mendapat 
    onInputChange = (e, type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    updateNotes = (note) => {
        console.log(note)
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }
    cancelUpdate = () => {
        this.setState({
            title: '',
            content: '',
            textButton: 'SIMPAN'
        })
    }

    deleteNote = (e, note) => {
        /// e = element .stopPropagation = agar diclik update tidak ikut
        e.stopPropagation();
        const {deleteNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        // data disini akan dikirim ke action
        const data = {
            userId: userData.uid,
            noteId: note.id,
        }
        deleteNote(data)
        // alert('hai');
    }

    render() {
        const {title, content, textButton} = this.state;
        const {notes} = this.props;
        const {updateNotes, cancelUpdate, deleteNote} = this;
        console.log('notes: ', notes)
        return (
            <div className='container'>
                <h1>Dashboard</h1>
                <hr/>
                <div className='input-form'>
                    <input placeholder='title' className='input-title' value={title} onChange={(e) => this.onInputChange(e, 'title')}></input>
                    <textarea placeholder='content' className='input-content' value={content} onChange={(e) => this.onInputChange(e, 'content')}>
                    </textarea>
                    <div className='action-wrapper'>
                        {
                            textButton === 'UPDATE' ? (
                                <button className='save-btn cancel' onClick={this.handleSaveNotes}  onClick={cancelUpdate}>Cancel</button>
                             ) : <div/>
                        }
                        
                        <button className='save-btn' onClick={this.handleSaveNotes}>{textButton}</button>
                    </div>
                </div>
                <hr/>
                {/* jika bukan array kosong maka tidak akan dirender */}
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                // note adalah data object yang kita masing 2 maping
                                notes.map(note => {
                                    return (
                                        <div className='card-content' key={note.id} onClick={() => updateNotes(note)}>
                                            <p className='title'>{note.data.title}</p>
                                            <p className='date'>{note.data.date}</p>
                                            <p className='content'>{note.data.content}</p>       
                                            <div className='delete-btn' onClick={(e) => deleteNote(e, note)}>X</div>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    ): null
                }
            </div>
        );
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes

})

const reduxDispatch = (dispatch) => ({
    // mengirim data dari atas
    saveNotes : (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data)),
    updateNotes: (data) => dispatch(updateDataFromAPI(data)),
    deleteNote: (data) => dispatch(deleteDataFromAPI(data)) 
})

export default connect(reduxState, reduxDispatch)(Dashboard);