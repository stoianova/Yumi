import React from 'react';
import './Main.css'

function Main() {
    return (
        <>
        <div className='formsBackEnd'>
        <p><a th:href="@{/admin/upload}" href="/admin/upload">Upload Items</a></p>
        <p><a th:href="@{/admin/announcement}" href="/admin/announcement">Announcements</a></p>
        <p><a th:href="@{/admin/emailListing}" href="/admin/emailListing">Email Listing</a></p>
        <form action="/logout" method="post">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
            <input type="submit" defaultValue="Logout" />
        </form>
        </div>
 
        </>
    );
}

export default Main;