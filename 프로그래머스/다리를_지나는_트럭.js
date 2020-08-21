function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let time = 0;
    let bridgeTruck = [];

    let sum;

    while (truck_weights.length > 0 || bridgeTruck.length > 0) {
        sum = 0;

        for (let i in bridgeTruck) {
            bridgeTruck[i].leftTime--;
            sum += bridgeTruck[i].truckWeight;
        }

        if ( bridgeTruck.length > 0 && bridgeTruck[0].leftTime === 0) {
            sum -= bridgeTruck[0].truckWeight;
            bridgeTruck.shift();
        }

        if (weight >= sum+truck_weights[0]) {
            bridgeTruck.push({
                leftTime: bridge_length,
                truckWeight: truck_weights.shift()
            })
        }

        time++;

    }

    answer = time;

    return answer;
}