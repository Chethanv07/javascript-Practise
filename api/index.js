async function main() {

    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        console.log(`name:${user.name.first} ${user.name.last} email:${user.email}`);
        let details = document.querySelector(".details");

        details.innerHTML = `<H1>${user.name.first} ${user.name.last}</H1>`

    }
    catch (error) {
        console.log(error)
    }
}
main();