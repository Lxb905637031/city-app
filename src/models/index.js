import { HTTP } from '@/utils/http'
import config from '@/utils/config'

class IndexModel extends HTTP {
    getHomeDatas(cityId) {
        return new Promise((reslove, reject) => {
            this.axiosPost({
                url: config.API.GET_HOME_DATAS,
                data: {
                    cityId,
                },
                success(data) {
                    reslove({
                        data,
                        status: 0
                    })
                },
                error(err) {
                    reject({
                        err,
                        status: -1
                    })
                }
            })
        })
    }
}

export { IndexModel }