import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjwl5dNLX39Vl2ooSSkG6USVuC1H7JQe2OQ&s";

    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxCe5ylefmheyjonpnPXiIpRtrW06QiMJvg&s";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFTv6mA41J9CHStUq_2GymHOPsZhHwDS6yg&s";
    const RAIN_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFRUVFxUVFRcVFRYVGBgWFRUWFxUVFRcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsdFRktKy0rLSsrLS0rKy0rLSstKy0tLSsrNzcrNy0rKy0rLjI3NysrLS0tKystKy0rKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAEDAgQDBQcEAgIDAAAAAAEAAhEDIRIxQVEEYfAFE3GBkQYUIjKhsdFCweHxI1IWUxVDkv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAREhQQL/2gAMAwEAAhEDEQA/AOomEkSqJKFWsG/hYqvGmIFlnDi43KDq0OIDsleFzaVQMK6DHSJRU0JJoAIQhA0JIQNKUIUAhJNUEoSlEqByhKUKhyhKUIGlKEpUDRKSJVAhIoJQNKUkIHKUpFEoBJCEAhCShgVPFvhp9FcFRxoBbmqjAHADK6VPdVlMFQaWXGI5rbwVS0Fc9hOi1cPXAzzRW9BclKxca64QahxAmJVq5VJp8l0aT5EoLEJSmihCSChpoSQiBNRTQNJCEBKChCAQkhAShJCAQhJAIQkgaSEkAhIIlUNCEKISy8YAASc9FmZxblCpUJzQVSmhEoGHK+hEqgKym+EHSNVrgRKxYbQVUHK7vc4QHeGI2yWrg3nI+Swvzyha+GokG6DaCmooRUkKLngXKze/NlBrSlQp1AbgypIGglJZOPmJnyQS98AMGyjU44fpusODeyiUR1qXEgi5CtDwuEXxfKNf3K5HF+07WnDRdidqYlo85H0lB7Qn8IXg6Xti+W/Cx0Ekn4hPwka+K63Z3tfTeYqDAP8AYSQDs7UeKK9Mkq6ddrgC1wIIkEEEEbgjNWIBCEkAhCSAQmooAoQkUDQkmqjhgppJyoGiUkkEwgFRQgmp0jdVKTXIOg1sEk7ArUVz6PFYRqVU7i3SYOaCVTinE7Rsp0+MOEg+R/KxkpSgsdVJ1UJUUINXDcUW20W+nxIi64ymCg63vTd1k4nig7IeZWSUBBZSgm4UHZoBUUHG9peDr1WxTIwAEuaCcTztlEDabrxNd8fCNr/hfTi4ASTAGa+de0wp9+40SIcAbCGhxs6N8pPiiMRcVJlQtMg/g8vBR4st7x2AyzEcBNjhJkTz0XoPZxnCVYZUpAVLxL3kPyy+KxibenIrR7N8VUa4d0C9jpxsH6QbYwTYEHTWCvcU6hBEkwM/wuTwHA06IIpNwhxkiSbxzP0W6jUvdQdeUKLDYQmqoQUkICUJBBQOUkIQCaSERxAiVAuRKInKFEJyimhLEgIJSjEkmgaFEBMoApAoChWqtYJc4AdZIJymvOVvab4yKYBbkJBkxrY62sqme1XxQ5kDcS71Fj90HqE1wP8Azjh8eFpYQAC0yLEzfOeUaK6h7QMcCQ0k7SPrt6FB2ESvPO7eq/8AW0DmT91bR9o25ObB1IcHDP1H1QdxCy0uPpOu14I1vEE5CE+K4wMbiz8DbzOiDm+1rooixjGJjIWMSJXhXgEA69WXp+0u2xWaaTmtFwZa8Oy0i33XJZwlO/xOI2gNkaiZ3G6JZ65ZtZWU3RcEyIO0GSLfQrou4WiTOAgagVCc/GYUOJ7ObJ7o3InASJy0OvV1Fe27B441qLXn5hLXeIi/mCD5rorzvsWxwouxNIBfadSAGugeQXoEGyjxcCDdbqT5ErjSupwbpaFRfKRKqe8jwUKhkZoq8FNZqRggLQgJUHVAM1RxlQ5DoLC4OIOZyRHSPFN3QuOQeimggmUIREk0JhFAQUwhAgpSkE1ASmogpoM/aHFNpUy8nKzRmS45ADqwK8TxvaZcCXnFUNnCJY1o0boQc/Aru+1jXEMywfF4l1jB2EDz8l42uRMdboNPvR0IEaARl4IdxJeficPQT6xJWBzlZTEkbzHmqi94gwcRANwIHn/MIqVxENGEa3mfF2ZS47iRiIZfc/SBv4rJz+6DY3i3x8xjzWl3EsIxCA8QCCLO0tpK5gKkwg21QbuC4sg2MHPbW4K2cdXNUNLnEtylpy8WfLI5QuNMZbK/geIAJa75XiDy2Pjf6oIVmFn7HQjl+FGlWIM/ZWtqZh12usTGR0eOaxF8WQbeIq4jMaATuNPNVvqGBfI2g3BGUJUTI5yf7Xa7NcKTqbx/u1p8HENPpKlrU+d67Hst2i94c19oAixE/wCzgctrLvh0qtzpz66lKdkRr4dsnNbBxLRDeS5IeclPvd0HRqcQCDfwWdnEDLkshcoFxQdMcSN5KBxsz9N1ySVJryqOsa8tG/4VLq+sZrBjPNQJKDSaw2Qs2E7FJEa/d37Jjhn7LqJhFcz3R+yY4V+y6cpyg5nub0/c3cl00Sg5o4R3JP3F24XQGc9apyg544F26fuLt1vlEoPKe2FAs4YuzIe3CIm5kfufRfOY15r6t7X0HP4chjS44mmGguNpvAXzHjuELYDmlrhm0iCPHXb1Uazms7gTpfVJpvsq4gqYeUZMsjTw52SzMCBA1UzWEXbfeTP4Udb9SqB9jBj8qJtfXRWOaDt5rTTpNjQ9bqGMjqmJ20rRV4RzGycsx5ET5wQrKnBN5eR65JUWuDHMDvgnFECxykbWsrKVRciJ66CG0ZK1M4DZ0RylaG9mON8Q525Ka1JGfh6VjaCDr+8rfwFRmOm2oDhxM8bvAafIwecFSdwLnADELWsNv5So9nEubLwCHNIgT8vj5LHbW9kmPpvubNk/dGbKJ4sbFL3sbFdHJP3VmyRoNkDCLz6iP5UTxY2KieMEix6sgu93b/qEdw3YKg8cBoUe/DZBf3Tdgjum7BZ3caBoVU7tRo/Sfog292NgngGyw0e1GuMBp30V3vY2KDTgGwSVHvY2QgkH808azYkw9Bpxp41kxck8aDX3iXeLN3iO88UGnvAgPWc1OoUO8Qa8aO8WTvVDvx1KDaai8H7bUCK5fFnMEcy2xnnl9F6x/FAZ/uub20xtanhHzAggm3iOtkHzhzCo4F6Gr2QQdNrFVHsl2yI4eBTY2dF2R2W7ZXN7HcdPug4PddZqQoTl+F6FvYrugm3sM8/RBwRQd0VJlF+xtyXox2E7afJWM7FeMpQxxOHmL/afoM/JfRj7F0GvdTPEPBpte6qP8ZdhZUZSa4BpOEONQmHfEA2CJK8PxfC1G1IHzDDFsVzBFiDN9F6/tXi+06zw2RjpPdjHBmo4sqvOBwqODnFriWxhaQ34TARXS4f2f4Noptc2rUPc8eXPbLQ93DueGuDSZa4YbN8Jlc//AI5RDKVTvCe/Y59MESQ1lJpql0H5m1XFo0+HVPs/sbtDBiaazcLnYQXPae8cH4iyf1fC4E875rJxXZnG8RWFIMFF1GmGNYMVJuF1UsOG5xF9VzpdMEzeBYOm2jTBLGGq4/5g0ENzova0/wD1iEDSMyulQ7MpvhzHlzY0Lbf5CwnEfhIETaZvBMErxHF9j8exxaadckNxEtFRzcLwHOOIWIOp3HJdXsw9o06nd1GVC51RtCa+Ms7wOIaBUnQzk6DzhB6Gr2fREf5THwk2Pyvpue2SG/DkBJ3JgQVyu0RgqYYiLXIJOocYJGRGVkhW4uZrd7SOLFieHsY0vN3ZQyS7TdR7R7I4gVi3A6oQSHFgdUGO5c0uj5oEoK6iGwr6PZFcyO6eC0CQWOBu4MDRa5JMRyKm3sWsabqjWEhpcCACXAsLQ74c7Yh9UGKo+8fus9Wm7ZXV+z67Q4uo1G4AHOJY4QCSATIsJBE8l1uK7BrsBJYTBaHBsuILpImBlzyQcbgGxJNtLrWHhaqnY9ZlM1XsLWjRwIPzNGUWu5qwwgn3gQoQhBfjzuFNp5qo8h1zQx2+XW6IuJRJVeK+XWiQeN0Vc1MqHj+EAyDf+/BAwOj4Ic22yTXW03/KC4f3mgcJlo2UI10HRQahtGXV0EnsESAFEsGw528YR6aqJd4deaB9y3KB1sn3bdhlbJQfUMfshtTkgm2iNh6dSpBovlySLrGfT0UZCCUC0BOAqwYjWOaZec0E6enW6Bf+FDLqybHCEHn+1aJ74kA/pggHYRBXSodr8SH4wQ1xe2o5zaNNhdUbihzy1gxH43zOeIytrnGbfgoa6dZz+h/CC+t2/wAVhJx3Ovdsn9dpwzA7x8DTEV5ri+0eI/yFst74Yahp02sxDH3l8DRcu1F4tlZd3GfLUR+6ePZBwD7Rcdgw4jBn/wBLJBLO7xA4Ja7BaRe53Uf+RcaXh5NxUFWRQpglzXvqCSGXAfUqOwm0vJi69AapJg9WUG1fDmgxcT2pXq0hSf8AIHB8BmECKbaTWgNhrWhrYAAGZzWwdvcXDxjtVL3VP8bPiLxDr4ZFtBYKeLkInNHeemQ/hBfR7e4mx7w2Lj8jc3VG1Xaf7tB9dCquG7V4ikzu6bsLQSQMDHQThuC4Ez8LYOijj0M3/GkIBjMW6sgl/wCa4lwexz/hfIf/AI2CQ5z3kThkS57jbdah29xFoe0BogAU6YAF7AYY1d6rBUqGNOuijEImTtB3QbOL7Yr1Q4PfIcAD8LBYFhiwt8jPRYCeSmHZR/PNPFe9kFceKFMPB/VHkkgqYXHrzJScQbCduf8ASztfJyvl19EgbTuURsxQLm32Spu8espVIcDyn7dXVYcPEzvsitoJmQMhvropmrJi+14z1WVjiWzFhYx9pzGSg1wkb9ZINTnGI3JTa4xbwP2WR55gC9/2VprNGh3GnnyQWkkDOf7GfWil3hyMRyjz/ZZjU9bevh1kg1AIPr+EFp4g7DK1sk2OEc/JUh0jaM+vRIv2+0bSZQaH1L55W9OajTrcv7VAbInLrRWtNpBtB/Bsgt7zc76JtqbC2shY6lTLWLGNZ1KsDjlkdQg0vqC/XmqG1sxqVU6tIkjz5JsqWsNTmYQXYpgzy+2icibi318+tVla8XsBI+vJWd5aJA6zQWufvtoPypB1jebc4WbGTF8pTDgf4QXGqW7cvD880+8mcr/UeKz1HgmwACk6CM7joRyQWd5qRbr6odecpF9pysqWAa23j6p1K4AAibZzbZBaKlj4xa4vkCdkPcZv14LNUyABv4pPqEm0nnta/wBUGh1iTOen0UnOGV7ZzeeYWVjtDoZU21DIN0FxqCdf48EnO0E/0qsUDEbRPp4dZqFF+u5z+iC+o85k8tOc/ZIVRzAzP2Vb2gwAYzmUg0CRYxaf3QaWPEZff8IWbvzuhBSH3Oyix2/p9lazhqjpwsLhLRLQTd1mg+MHxVtPgav/AFvnUYXZB2A6WE/D4oiilEAneOfjCtcwXjlcnJOr2c8ZseDDjdrhZt3ROgF5UanBva0uNNwAMYiCACQHC51iDCAy1zGXPmlVeIECYHh4qFCrsJvMctUS0uJIgD77IEJ9coyU3NIgm+mf0VYqazCliyAMmc0F0yYIz1GnJRrsvHVkoIziyiWkwipNcBzmfv8ARDHb9BVnNJjJvlsiLxV+EiACdYn0RjtA2zjzMKnvM7ycsteSZxAxlob7oLGHOSckmNF/FVEmSD9FEmCBsf7QaMVjG2RUMdr22Hnok6pJIaD4lRD9CLgz5bILJBFo+ysLwYjwNtgqalSdI80Nq6acskF9RuL5RAEqtjwTGW6qL9P3VrRF4M5+SBBmYFoF9iE+8AgFuVxG3JJrwdDsqahi8Rt4Iq/XKJ9FF2cZrP3xcm3WTsg0PMxORU8eEASc5BzlQaBkSNbqpzgQBJmeoQSff1upOMa36hZ3tI1/kJZ5TpKC7G4i5Fzkf2KBIEgD/UpP4ltgBHjuovk3Bt6ILQ5xtOWkJkgaeuY/hZnsIn9lLCTGqC5xTWcxsUINvC9oOpgtaAQ/DMz+kyBnGeuecQtDvaCpiMho+e4x2LyHEt+KRdogCw2klCEZWO9pKzZ+Ul4MyCbEggATAAgWFjFwVk7R7bqVQRUDfjcHOIFyWggSZvmed9rIQhqnhotB2n8LPxDxNhmUIQRzEbK2nJFkIRVjotcnq6liEgARnB32QhEKrTgAkxM/RVX0KEIqODfTZSa+XaxqhCCL3yfhtCm55mDCEIiIBvdDqRGqSEFzWyBdUtmSBCEIq3uszoM061WLA6JoQVEkAftslxOcZ+KSEEqZkA6ZKLtRHNCEEWuhAM+KaEES/SE5H5QhBJ5ETqqu9OWiEIAW1VrKtgBbcoQiqXvvkkhCg//Z";

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo- {info.weather}</h1> */}

            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    &nbsp;
                    {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.tempMin}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}